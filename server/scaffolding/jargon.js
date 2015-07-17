
if (Jargon.find().count() == 0) {
	Jargon.insert({
		name: 'FTP', // name must be unique
		lname: "File Transfer Protocol",
		descr: "A method used to transmit files between computers",
		url: 'http://ftp.example.com',
		related: ['SFTP', 'SCP']
	});
	Jargon.insert({
		name: 'SFTP', // name must be unique
		lname: "Secure File Transfer Protocol",
		descr: "A method used to transmit files between computers somewhat securely",
		url: 'http://sftp.example.com',
		related: ['FTP', 'SCP']
	});
	Jargon.insert({
		name: 'SCP', // name must be unique
		lname: "Secure Copy Protocol",
		descr: "A method used to transmit files between computers somewhat securely",
		url: 'http://scp.example.com',
		related: ['SFTP','FTP']
	});
}