
const app = Vue.createApp({
    data(){
        return{
            valueInput: '',
            QuestList: [],
            showModal: false,
            messege: ""
        };
    },
    methods: {
            handlyInput (event){
                this.valueInput = event.target.value;
            },
            addTask (){
                if (this.valueInput === '') {return};
                this.QuestList.push({
                    title: this.valueInput,
                    id: Math.random(),
                    type: "one"
                });
                this.valueInput = '';                
            },
            removeMask (index, type) {
                const QList = this.QuestList ;
                QList.splice(index,1);
            }
    }
})

app.component("modal", {
    template: "#modal-template",
})

app.mount('#app')

