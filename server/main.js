import { Meteor } from 'meteor/meteor';

Images =new Mongo.Collection("Images");
console.log(Images.find().count());  

Meteor.startup(() => {
  // code to run on server at startup
  console.log("I am server");
  
  if(Images.find().count()==0){
	  
	  for(var i=1;i<23;i++){
		  
		  Images.insert({
		   img_src:"img"+i+".jpg",
		   img_alt:"image number"+i
		   
	   });
	  }
	  console.log(Images.find().count()); 
   
   
    }
});
