import React, { Component } from "react";

class Board extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id: ",id);
    this.props.getBoard(id);
  }

  render() {
    return (
      <div>
        <div  id='board1' className="col">{
          this.state.grid.map((row1, index1)=> {
            var rowArray1 = row1;
            var rowNum1 = index1+1;
            var rowID1 = 'row'+rowNum1;
            const newBlock1 = rowArray1.map((block,key) =>{
              return <div id='block1' data-board='Player 1' data-block={block} key={key} onClick={this.missle} >{block}</div>
            });
            return <div key={index1} className='row'>{newBlock1}</div>
          })
        }
      </div>
        <div  id='board2' className="col">{
          this.state.grid.map((row2, index2)=> {
            var rowArray2 = row2;
            var rowNum2 = index2+1;
            var rowID2 = 'row'+rowNum2;
            const newBlock2 = rowArray2.map((block,key) =>{
              return <div id='block2' data-board='Player 2' data-block={block} key={key} onClick={this.missle} >{block}</div>
            });
            return <div key={index2} className='row'>{newBlock2}</div>
          })
        }
        </div>
      </div>
    );
  }
}
export default Board;
