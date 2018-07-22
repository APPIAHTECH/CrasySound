
import Util from './../../common/js/Utilities.js'
import Notes from './../../model/Notes'

const notes = new Notes();

    export default {
      name: "Grid",

      props : {

        rows : { //Allways keep it -1 of want it deserve , beacause in template we add one more thats represents the last

          type: Number,
          required : false,
          default : 3

        } ,

        cols : {

          type: Number,
          required : false,
          default : 10

        },

        octaves : {

          type: Number,
          required : false,
          default : 1

        },

        piano : {

          type: Boolean,
          required : false,
          default : true

        },

        notes : {

          type: Array,
          required : false,
          default : ()=>{ return [ 'C' , 'CS' , 'D' , 'DS' , 'E' , 'F' , 'FS' , 'G' , 'GS' , 'A' , 'AS', 'B']}

        }

      },

      data(){

        return{

          grid : {
            lastElementID : 0,
            heightNotes : 0,
            pianoNotes : new Array()
          },

          edit : { },

          gridCss : {
            barClassName : 'bar',
            rows : "row"
          }
        }

      },

      created(){

        this.grid.lastElementID = this.rows + this.cols;
        this.grid.heightNotes = this.$store.getters.getMaxNotes;

        this.$store.state.barState = Util.setSetateBarArray({
          rows : this.$store.getters.maxOctaves || this.octaves,
          cols : 0
        });

        //Reversing the notes , DONT remove this line of code , if u do so the pattern id will not match
        if(this.piano) {
          let j = 0;
          for (let i = this.notes.length; i >= 0; i--) {
            this.grid.pianoNotes[j] = this.notes[i];
            j++;
          }
        }
      },

      mounted(){},

      destroy(){},

      methods : {

        createBar(container , event){

          if(container) {

            const bar = {

              note: {
                pain: 0,
                velocity: 0,
                release: 0,
                pitch: 0,
                startingTime: 0,
                duration: 1,
                key: "C1",
                octave: 1,
                frequency: 3000
              },

              DOMElement: null,
              ID: null
            };

            let div = document.createElement('div');
            let key = Util.hashKey().ciphertext.words[0];
            let note = event.target.dataset.keynote;
            let rowToPlaceBar = (event.target.dataset.octave) - 1;
            let octave = parseInt(event.target.dataset.octave);

            note = note[0] || (note[0] + note[1]);
            div.classList = this.gridCss.barClassName;
            div.setAttribute('id', key);
            div.setAttribute('data-keynote', note);

            bar.DOMElement = div;
            bar.ID = key;
            bar.note.key = note;
            bar.note.octave = octave;

            bar.note.frequency = notes.getNoteFrequency(octave , note);

            this.$store.commit('addNewBar', {
              row: rowToPlaceBar,
              bar: bar
            });

            container.appendChild(div);
          }
        },

        removeBar(container){

          if(container && container.classList[0] != this.gridCss.rows){
            let stateBar = this.$store.getters.getBarState;
            let key = container.getAttribute('id');
            stateBar.forEach((array)=>{

              array.forEach((element , index)=>{

                if(element.ID == key)
                  array.splice(index, 1);
              })

            });

            container.remove();
          }

        },

        controller(event){

          if(event.button == 0) //left button 0
            this.createBar(event.target , event);
          else if(event.button == 2){
            this.removeBar(event.target) ; //right button 2
          }

        }

      }
    }
