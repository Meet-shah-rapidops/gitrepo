let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let docId = document.getElementById("_id");
let tbody = document.getElementById('tbody');
let user = [];
let id = 0;
let addbtn = document.getElementById('add');
let updatebtn = document.getElementById('update');
let updatedusr;
let commits;
 
async function show() {
		let response = await fetch('http://localhost:3001/data');
		commits = await response.json(); // it will read the response and convert into json format
		try{
			console.log('successfully data retrieve')
		}
		catch(error){
			// res.send('errror in retrieving data',err)
			console.log('errror in retrieving data',error)
		}
	tbody.innerHTML = '';
	for(let i=0;i<commits.length;i++){
		tbody.innerHTML += `<tr>
							<td>${commits[i].firstName}</td>
							<td>${commits[i].lastName}</td>
							<td><span onclick = "edit(${i})"><i class="fas fa-edit"></i></span></td>
							<td><span onclick = "del(${i})"><i class="fas fa-trash"></i></span></td>
							</tr>`;
	};
}

async function add() {
		try {
			const data = {
				fname: firstName.value,
				lname: lastName.value
			};

			console.log(data);
			await fetch("http://localhost:3001/data/addData", { //this will fetch the data from api
				method: "POST",
				headers: {
					'Content-type': 'application/json'  // it means that file is json data
				},
				body: JSON.stringify(data)// it converts into string data
			});
			show();           

		} catch (error) {
			console.log('error',error);
		} 
	}
		
async function edit(i) {
	try{
		addbtn.style.display = 'none';
		updatebtn.style.display = 'initial';
		docId.value = commits[i]._id; 
		firstName.value = commits[i].firstName; //it will simply copy the db field data into i/p box    
		lastName.value = commits[i].lastName;//it will simply copy the db field data into i/p box
	}
	catch (error) {
        console.log('error',error);
    } 
}

async function update(i) {
	try {
		const data = {
			_id: docId.value,                 
			fname: firstName.value,
			lname: lastName.value
		};

		console.log(data);
		await fetch("http://localhost:3001/data/updateData", {
			method: "PUT",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		show();
		
		addbtn.style.display = 'initial';
		updatebtn.style.display = 'none';
    } catch (error) {
        console.log('error',error);
    }   	    
}

async function del(i) {
	try {
		const data = {
			_id: commits[i]._id          //from this it will get the id
		};

		await fetch("http://localhost:3001/data/deleteData", {
			method: "DELETE",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		show();
    } catch (error) {
        console.log('error',error);
    }   	
}

show();
