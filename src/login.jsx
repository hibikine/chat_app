import React from 'react';
import io from 'socket.io-client';

export default function Login(props) {
  const socket = io();
  return (
    <div>
      <input type="text" name="ID" id="ID"/>
      <label htmlFor="ID">ID:</label>
      <input type="password" name="PassWord" id="PassWord"/>
      <label htmlFor="PassWord">パスワード:</label>
      <input type="password" name='Re-PassWord' id="Re-PassWord"/>
      <label htmlFor="Re-PassWord">もういちど:</label>
      <button onClick={() => {
        const ID = document.getElementById('ID').value;
        const PassWord = document.getElementById('PassWord').value;
        const RePassWord = document.getElementById('RePassWord').value;
        if(PassWord===RePassWord && ID===/.+/) {
          socket.emit('Register', ID, PassWord)}}}>
        登録
      </button>
    </div>
  )
}