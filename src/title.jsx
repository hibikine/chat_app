import React from 'react'

export default function Title(props) {
  return (
    <div>
      <h1>Welcome to Chat App!</h1>
      <button onClick={() => {props.onChangeScene(SCENE_LOGIN)}}>ログイン</button>
      <button onClick={() => {props.onChangeScene(SCENE_REGISTER)}}>登録</button>
    </div>
  )
}