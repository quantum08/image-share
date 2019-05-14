Images = new Mongo.Collection("images");


//set up security on the images collection
Images.allow({
	insert:function(userId,doc){
		console.log("testing image security on insert");

		if(Meteor.user())
		{
			console.log(doc);
			if(userId ! =doc.createdBy){
				return false;
			}
			else
			{
				return true;
			}

		}
		else
		{
			return false;
		}
	},

	remove:function(userId,doc){
		console.log("testing image security on remove");
		return true;
	}
})