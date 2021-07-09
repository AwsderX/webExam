
const app = Vue.createApp({
    data(){
        return{
            valueInputTitle: '',
            valueType: 'one',
            selectedOption : 'one',
            QuestList: [],
            showModal: false
        };
    },
    methods: {
            handlyInput (event){
                this.valueInputTitle = event.target.value;
            },
            changeOption: function(){
                this.valueType = this.selectedOption;
            },
            addTask (){
                if (this.valueInputTitle === '' || this.valueInputText === '') {return};
                this.QuestList.push({
                    title: this.valueInputTitle,
                    id: Math.random(),
                    type: this.valueType
                });
                this.valueInputTitle = '';              
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

