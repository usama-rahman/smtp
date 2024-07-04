// pages/chat/[userId].tsx
import { Messages } from "@/components/Messages";
import { Status } from "@/components/Status";
import { PageHeader } from "@ant-design/pro-layout";
import { Button, Input, message as antMessage } from "antd";
import Head from "next/head";
import { useState } from "react";
import { SendOutlined, WechatOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { ChatBox } from "..";

export default function ChatRoomEntry(props: { userId: string }) {
  const { userId } = props;

  const [ws, setWs] = useState<WebSocket | undefined>(undefined);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const baseURL = `ws:localhost:8080/websocket?id=${userId}`;

  const router = useRouter();

  const enterChat = () => {
    const ws = new WebSocket(baseURL);
    setWs(ws);
    ws.onopen = () => {
      /**
       * i need to call ws.send just because my backend server is config in
       * such away  that it execpt action:"join-room"
       * in your case you might no need to call below send function (in case you are using other backend endpoint)
       */
      ws?.send(
        JSON.stringify({
          action: "join-room",
          message: "joining room",
          roomId: "123456",
          sender: `${userId}`,
        })
      );
      setMessage("");
      antMessage.success(`Websocket opened!`);
    };

    ws.onclose = () => {
      antMessage.success(`Websocket closed!`);
      setWs(undefined);
    };

    ws.onmessage = (msg) => {
      setMessagesFnc(JSON.parse(msg.data));
    };

    ws.onerror = (error) => {
      antMessage.error(`Websocket error: ${error}`);
    };
  };

  const sendMessage = () => {
    if (message && message !== "") {
      /**
       * json object can be any object
       * for my backend endpoint it is expecting below object
       */
      ws?.send(
        JSON.stringify({
          action: "send-message",
          message: message,
          roomId: "123456", //here roomId is constant/same for all user , you can make it dynamic if you want multiroom chat app
          sender: `${userId}`,
        })
      );
      setMessages((prev) => [
        ...prev,
        {
          action: "send-message",
          message: message,
          roomId: "123456",
          sender: `${userId}`,
        },
      ]);
      setMessage("");
    }
  };
  const handleLogout = () => {
    ws?.close();
    router.push("/");
  };

  const setMessagesFnc = (value: any) => {
    setMessages((prev) => [...prev, value]);
  };
  return (
    <>
      <Head>
        <title>Simple chat application</title>
        <meta
          name="description"
          content="Simple chat application creating using web socket"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <>
          <PageHeader
            className="site-page-header-responsive"
            title="WebChat"
            extra={[
              <Button key="1" type="primary" onClick={handleLogout}>
                Logout
              </Button>,
            ]}
          />
          {ws ? (
            <ChatBox>
              <h1>WebChat</h1>
              <Status status="You are online" color="green" />
              <Messages messages={messages} currentUser={userId} />
              <div className="chat-inputs">
                <Input
                  size="large"
                  placeholder="Write message"
                  onChange={(evnt: any) => setMessage(evnt.target.value)}
                  value={message}
                />
                <Button
                  type="primary"
                  shape="round"
                  icon={<SendOutlined />}
                  onClick={() => sendMessage()}
                >
                  Send Message
                </Button>
              </div>
            </ChatBox>
          ) : (
            <ChatBox style={{ marginTop: "50px" }}>
              <h1>WebChat</h1>
              <Status status="You are offline" color="red" />
              <Button
                type="primary"
                shape="round"
                icon={<WechatOutlined />}
                onClick={() => enterChat()}
              >
                Enter chat
              </Button>
            </ChatBox>
          )}
        </>
      </main>
    </>
  );
}
export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const query = ctx.query;
  return {
    props: { userId: query.userId },
  };
};