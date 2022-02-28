<template>
  <div class="container">
    <form action="">
      <input type="text" placeholder="Type Your Task" v-model="textTask">
      <button @click.prevent="addTask" class="add-task" :disabled="!textTask">Add Task</button>
      <button class="delete-all" @click.prevent="deleteAllTasks" :disabled="tasks.length < 2" v-if="tasks.length > 1">
        Delete All
      </button>
    </form>

    <div class="tasks-list" v-for="(task ,index) in tasks" :key="(task , index)">
      <div class="task-box" @click="task.done = !task.done" :style="{ 'text-decoration' : task.done ? 'line-through' : '' }" >
              {{task.words}}
      </div>

      <button @click.prevent="deleteTask(index)" class="delete">Delete</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ToDoList",
  data: function(){
    return{
      tasks: [],
      textTask: "",
    }
  },
  methods:{
    addTask(){
      this.tasks.push({ words: this.textTask , done:false});
      this.textTask = "";
    },
    deleteTask(index){
      this.tasks.splice(index,1);
    },
    deleteAllTasks(index){
      this.tasks.splice(index, this.tasks.length);
      this.tasks = [];
    }
  }
}
</script>