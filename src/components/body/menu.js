import React, { Component } from 'react'
import dishes_array from '../../data/data';
import MenuItem from './menuitem'
import DishDetail from './dishdetail';
class Menu extends Component {

    state = {
        dishes: dishes_array,
        selectedDish: null
    }

    Food_Select = (dish) => {

        this.setState({ selectedDish: dish })
    }

    render() {
        let menu_var = this.state.dishes.map(item => {
            return (

                <MenuItem dishes_para={item} key={item.id} key_2={() => this.Food_Select(item)} />

            );
        })
        let show_dish = null;
        if (this.state.selectedDish != null) {
            show_dish = <DishDetail dish={this.state.selectedDish} />
        }
        return (
            <div>
                <div class="container px-5 text-center">
                    <div class="row gx-5">
                        <div class="col">
                            <div class="p-3 border bg-light"> {menu_var}</div>
                        </div>
                        <div class="col">
                            <div class="p-3  bg-light"> {show_dish}</div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}
export default Menu;