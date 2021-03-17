import React from 'react';
import { produce } from "immer";

class ImmerDemo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      address: {
        country: 'China',
        city: {
          name: 'ShenZhen',
          area: 'NanShan',
          postcode: 100000, // 邮编号码
        },
      }
    };
  }

  changeValue1 = () => {
    this.setState((prevState) => {
      return produce(prevState, draftState =>{
        draftState.address.city.area = 'ShenZhen';
        draftState.address.city.postcode = draftState.address.city.postcode + 10;
      });
    });
  }

  changeValue2 = () => {
    this.setState(produce(draftState => {
      draftState.address.city.area = "HongKong";
      draftState.address.city.postcode = draftState.address.city.postcode + 10;
    }));
  }

  render() {
    return (
      <div>
        <h1>Goldcoast</h1>
        <button onClick={() => this.changeValue1()}></button>
      </div>
    )
  }
}

export default ImmerDemo;