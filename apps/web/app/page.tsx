import {client} from "@repo/db/client"
export default async function Home(){
  const user = await client.user.findFirst();
  return(
    <div>
      Id:
      {user?.id}
      <br />
    Name:
      {user?.name}
      <br />
      Email:
      {user?.email}
      <br />
      Password:
      {user?.password}


      $$$This is change 1
    </div>
  )
}