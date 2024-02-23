const form=document.querySelector('form');
const blogCard=document.querySelector('.blogs-container');
var coll = document.getElementsByClassName("collapsible");

form.addEventListener('submit',postBlog);

window.addEventListener('DOMContentLoaded',()=>{
	axios.get('http://localhost:7000/get-blog').then((resp)=>{
		for(let i=0;i<resp.data.length;i++){
			show(resp.data[i]);
		}
	}).catch((err)=>console.log(err));
})  

function postBlog(e){
	e.preventDefault();
	const obj=new  Object();
	obj.title=document.querySelector('#title').value;
	obj.author=document.querySelector('#author').value;
	obj.content=document.querySelector('#content').value;
	console.log(obj);
	axios.post('http://localhost:7000/post-blog',obj).then((result) => {
		console.log(result);
		console.log('post successfully');
	}).catch((err) => {
		console.log(err);
	});
	alert("please refresh page");
}
function show(obj){
	const newDiv=document.createElement('div');
	const title=document.createElement('h1');
	title.append(document.createTextNode(obj.title));
	newDiv.appendChild(title);
	const author=document.createElement('h3');
	author.append(document.createTextNode("Author - "+obj.author));
	author.style.color="red";
	newDiv.appendChild(author);
	const content=document.createElement('p');
	content.append(document.createTextNode(obj.content));
	newDiv.appendChild(content);
	const comment=document.createElement('h3');
	comment.append(document.createTextNode("Comments"));
	newDiv.append(comment);
	const commentDiv=document.createElement('div');
	const commentBox=document.createElement('input');
	commentBox.type="text";
	commentBox.placeholder="write comment";
	commentDiv.append(commentBox);
	const commentBtn=document.createElement('button');
	commentBtn.append(document.createTextNode("Send"));
	commentDiv.append(commentBtn);
	newDiv.appendChild(commentDiv);
	blogCard.appendChild(newDiv);
	commentBtn.addEventListener('click',postComment);
	axios.get('http://localhost:7000/get-comment/'+obj.id).then((result)=>{
		for(let j=0;j<result.data.length;j++){
			const newComment=document.createElement('div');
			const id=document.createElement('input');
			id.type="hidden";
			id.value=result.data[j].id;
			newComment.appendChild(id);
			const commentText=document.createElement('div');
			commentText.append(document.createTextNode(result.data[j].comment));
			newComment.appendChild(commentText);
			const delBtn=document.createElement('button');
			delBtn.append(document.createTextNode('delete'));
			delBtn.className="del-btn";
			newComment.appendChild(delBtn);
			const hr=document.createElement('hr');
			newComment.appendChild(hr);
			newDiv.appendChild(newComment);
			delBtn.addEventListener('click',delComment);
		}

	})
	function postComment(e){
		e.preventDefault();
		const commentData=e.target.parentElement.firstChild.value;
		const data=new Object();
		data.comment=commentData;
		data.blogId=obj.id;
		axios.post('http://localhost:7000/post-comment',data).then((resp)=>{
			console.log("comment posted");
		}).catch((err)=>console.log(err));
		alert("please refresh page");
	}
	function delComment(e){
		e.preventDefault();
		const commentId=e.target.parentElement.firstChild.value;
		axios.delete('http://localhost:7000/delete-comment/'+commentId).then((resp)=>{
			console.log("successfully deleted");
		}).catch((err)=>console.log(err));
		alert("please refresh page");
	}
	
}
