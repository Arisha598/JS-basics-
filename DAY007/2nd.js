const user ={
    username:"arisha",
    Price:989,
    WelocmeTo : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.WelocmeTo()