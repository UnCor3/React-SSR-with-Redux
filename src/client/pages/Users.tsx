import { useState } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { setUsers } from "../../store/reducer/users/users.action.ts";
import withHelmet from "../hoc/withHelmet.hoc.tsx";

export type User = {
  name: string;
};
const RenderUser = () => {
  const dispatch = useDispatch()
  const users = useSelector((state : any) => state.users.users)
  const [newUser, setNewUser] = useState<string>();

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems : 'center',justifyContent:'center'}}>
      {users.map((item: any, i: number) => (
        <div key={i}>{item.name}</div>
      ))}
      <input
        type="text"
        placeholder="enter a new user"
        onChange={(e) => {
          setNewUser(e.target.value);
        }}
      />
      <button
        onClick={() => {
         dispatch(setUsers({name : newUser}))
        }}
      >
        Submit
      </button>
    </div>
  );
}

const seo = {
  title : 'SSR_USERS',
  og_title : 'SSR_USERS'
}

export default withHelmet(seo,RenderUser)