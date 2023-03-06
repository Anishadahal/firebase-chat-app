import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { collection } from "firebase/firestore";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebaseconfig";
import getOtherEmail from "../utils/getOtherEmail";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats: any = snapshot && snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const router = useRouter();

  const redirect = (id: string) => {
    router.push(`/chat/${id}`);
  };

  const chatList = () => {
    return chats
      ?.filter((chat: any) => chat.users.includes(user?.email))
      .map((chat: { id: any; users: any }) => (
        <Flex
          key={Math.random()}
          p={3}
          align="center"
          _hover={{ bg: "gray.100", cursor: "pointer" }}
          onClick={() => redirect(chat.id)}
        >
          <Avatar src="" marginEnd={3} />
          <Text>{getOtherEmail(chat?.users, user)}</Text>
        </Flex>
      ));
  };
  return (
    // @ts-ignore
    <Flex
      //    bgColor={"blue.100"}
      w="300px"
      borderEnd={"1px"}
      borderColor={"gray.200"}
      direction={"column"}
    >
      <Flex
        h="81px"
        //   bgColor={"rd.100"}
        w="100%"
        align={"center"}
        justifyContent={"space-between"}
        p={3}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
      >
        <Flex align={"center"}>
          {user?.photoURL && <Avatar margin={3} src={user?.photoURL} />}
          <Text>{user?.displayName}</Text>
        </Flex>
        <IconButton
          aria-label=""
          size="sm"
          isRound
          icon={<ArrowLeftIcon />}
          onClick={() => signOut()}
        />
      </Flex>
      <Button margin={5} padding={4}>
        New Chat
      </Button>
      <Flex overflowX="scroll" direction="column" sx={{ scrollbarWidth: "none" }} flex={1}>
        {chatList()}
      </Flex>
    </Flex>
  );
};
