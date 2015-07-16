var postsData = [
	{
		name: 'FTP', // name must be unique
		lname: "File Transfer Protocol",
		descr: "A method used to transmit files between computers",
		url: 'ftp.example.com',
		related: ['SFTP']
	}, 
	{
		name: 'SFTP', // name must be unique
		lname: "Secure File Transfer Protocol",
		descr: "A method used to transmit files between computers somewhat securely",
		url: 'sftp.example.com',
		related: ['FTP']
	}, 
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	}
];
Template.jargonList.helpers({
	jargon: postsData
});