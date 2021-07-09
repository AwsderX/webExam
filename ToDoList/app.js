
const app = Vue.createApp({
    data(){
        return{
            valueInputTitle: '',
            valueInputText: '',
            valueType: 'one',
            selectedOption : null,
            QuestList: [],
            showModal: false
        };
    },
    methods: {
            handlyInput (event){
                this.valueInputTitle = event.target.value;
            },
            handlyInput1 (event){
                this.valueInputText = event.target.value;
            },
            changeOption: function(){
                this.valueType = this.selectedOption;
            },
            addTask (){
                if (this.valueInputTitle === '' || this.valueInputText === '') {return};
                this.QuestList.push({
                    title: this.valueInputTitle,
                    text: this.valueInputText,
                    id: Math.random(),
                    type: thisvalueType
                });
                this.valueInputTitle = '';
                this.valueInputText = '';                
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

