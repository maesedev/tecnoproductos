import { api } from '../../utils/api';
import { useSession } from 'next-auth/react';

export default function experimental() {
  
  const {data:Session} = useSession()

  let secretMessage
  if(Session){
    secretMessage = api.auth.getSecretMessage.useQuery().data;
  }
  
  return (
    <>
    {
      Session ?
      <h1>{secretMessage}</h1>:
      <h1>you are not authorized</h1>
    }
    </>
  )
}
