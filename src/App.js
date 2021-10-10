
import './App.css';
import React, { Component } from "react";


class App extends Component {
    render() {
        const container = {
            width: "450px",
            height:" 500px",
            backgroundColor: "#ffffff",
            margin: "250px auto 0 auto",
            textAlign: "center",
        }
        const input = {
            width: "300px",
            height:"50px",
            fontSize: "18px",
            marginBottom: "25px",
            borderRadius: "4px",
            paddingLeft: "10px",
        }

        return (
            <div className="App">
                <div style={container}>
                    <form>
                        <h1>Авторизация</h1>
                        <input style={input} type="text" name="username" placeholder="Введите логин"/>
                        <input style={input} type="password" name="password" placeholder="Введите пароль"/>
                        <input style={input} type="submit" name="submit" value="ВОЙТИ"/>

                    </form>
                </div>
            </div>

        );
    }
}

export default App;

