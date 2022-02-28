<template>
  <div class="container">
    <div class="errors-list">
        <div class="error" v-for="error in formErrors" :key="error"> {{error}}</div>
      </div>

    <form action="send.html" method="post" @submit="validateForm">
      <div class="form-group">
        <label for="">Username</label>
        <input type="text" name="username" class="form-input" v-model="userName"> 
      </div>

      <div class="form-group">
        <label for="">Subject</label>
        <input type="text" name="Subject" class="form-input" v-model="subject">
      </div>

      <div class="form-group">
        <label for="">Message</label>
        <textarea name="Message" class="form-input" v-model="message"></textarea>
      </div>
      <div class="form-input">
        <input type="submit" class="form-input" value="Send" :disabled="!userName || !subject || !message">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ValidationForm",
  data: function(){
    return{
      formErrors: [],
      userName: null,
      subject: null,
      message: null,
      maxChar: 10,
    }

  },
  methods:{
    validateForm(e){
      this.formErrors = []; //Emoty Errors To Start Fresh

        //Check If Username Is Empty!!
      if(!this.userName){
        this.formErrors.push("Username Can't Be Empty")
      }
      
       //Check If subject Is Empty!!
      if(!this.subject){
        this.formErrors.push("subject Can't Be Empty")
      }

       //Check If Message Is Empty!!
      if(!this.message){
        this.formErrors.push("message Can't Be Empty")
      }

      //Check Username Chars Count!!
      if(this.userName && this.userName.length > this.maxChar){
        this.formErrors.push(`Username Can't Be More Than ${this.maxChar} Chars `)
      }

      if(!this.formErrors.length){
        return true;
      }

      e.preventDefault();
    }
  }
}
</script>