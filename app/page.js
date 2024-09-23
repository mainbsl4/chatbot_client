"use client";
import React, { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // const handleSendMessage = async (e) => {
  //   e.preventDefault();

  //   if (message.trim()) {
  //     setChat((prevChat) => [...prevChat, { user: "You", text: message }]);
  //     setMessage("");

  //     try {
  //       const response = await fetch(
  //         `http://127.0.0.1:8000/chat/chat/?message=${encodeURIComponent(message)}`
  //       );
  //       const data = await response.json();
  //       console.log(data);

  //       setChat((prevChat) => [
  //         ...prevChat,
  //         { user: "AI", text: data.response },
  //       ]);
  //     } catch (error) {
  //       setChat((prevChat) => [
  //         ...prevChat,
  //         { user: "Error", text: error.message },
  //       ]);
  //     }
  //   }
  // };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      setChat((prevChat) => [...prevChat, { user: "You", text: message }]);
      setMessage("");

      try {
        const response = await fetch("http://127.0.0.1:8000/chat/chat/", {
          method: "POST", // Use POST method
          headers: {
            "Content-Type": "application/json", // Set headers for JSON
          },
          body: JSON.stringify({ message }), // Send the message in the body
        });

        const data = await response.json();
        setChat((prevChat) => [
          ...prevChat,
          { user: "bdCalling", text: data.response },
        ]);
      } catch (error) {
        setChat((prevChat) => [
          ...prevChat,
          { user: "Error", text: error.message },
        ]);
      }
    }
  };

  return (
    <div>
      {/* <div className="w-full h-[100vh]">
      <h1>Chat with AI</h1>
      <div id="chat-box">
        {chat.map((entry, index) => (
          <div key={index}>
            {entry.user}: {entry.text}
          </div>
        ))}
      </div>

      <form className="w-full bg-red-600 flex fixed bottom-5 left-0" onSubmit={handleSendMessage}>
        <div className="relative w-full">
          <input
            type="text"
            id="user-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your message..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            id="send-button"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
              />
            </svg>
          </button>
        </div>
      </form>
    </div> */}

      {/* <Image
                  src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                  alt="User Avatar"
                  class="w-12 h-12 rounded-full"
                /> */}

      <div class="flex h-screen overflow-hidden">
        <div class="w-1/4 bg-white border-r border-gray-300">
          <header class="p-4 border-b border-gray-300 flex justify-between items-center bg-indigo-600 text-white">
            <h1 class="text-2xl font-semibold">bdCalling</h1>
            <div class="relative">
              <button id="menuButton" class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path d="M2 10a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2z" />
                </svg>
              </button>
              <div
                id="menuDropdown"
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden"
              >
                <ul class="py-2 px-3">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-800 hover:text-gray-400"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-800 hover:text-gray-400"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <div class="overflow-y-auto h-screen p-3 mb-9 pb-20">
            <div class="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <div class="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
              <div class="flex-1">
                <h2 class="text-lg font-semibold">Alice</h2>
                {/* <p class="text-gray-600">Hoorayy!!</p> */}
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <header class="bg-white p-4 text-gray-700">
            <h1 class="text-2xl font-semibold">Alice</h1>
          </header>

          <div class="h-screen overflow-y-auto p-4 pb-36">
            {/* <div class="flex mb-4 cursor-pointer">
              <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
              
              </div>
              <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                <p class="text-gray-700">Hey Bob, hows it going?</p>
              </div>
            </div> */}

            {/* {chat.map((entry, index) => (
              <div class="flex justify-end mb-4 cursor-pointer" key={index}>
                <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                  <p>
                    {entry.user}: {entry.text}
                  </p>
                </div>
                <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2"></div>
              </div>
            ))} */}

            {chat.map((entry, index) => (
              <div
                class={`flex mb-4 cursor-pointer ${
                  entry.user === "You" ? "justify-end" : ""
                }`}
                key={index}
              >
                {/* User Message */}
                {entry.user === "You" ? (
                  <>
                    <div class="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
                      <p>
                        {entry.user}: {entry.text}
                      </p>
                    </div>
                    <div class="w-9 h-9 rounded-full flex items-center justify-center ml-2"></div>
                  </>
                ) : (
                  /* AI Message */
                  <>
                    <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2"></div>
                    <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                      <p class="text-gray-700">
                        {entry.user}: {entry.text}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* <div class="flex mb-4 cursor-pointer">
              <div class="w-9 h-9 rounded-full flex items-center justify-center mr-2">
               
              </div>
              <div class="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                <p class="text-gray-700">
                  That book sounds interesting! Whats it about?
                </p>
              </div>
            </div> */}
          </div>

          <form
            class="bg-white border-t border-gray-300 p-4 absolute bottom-0 w-3/4"
            onSubmit={handleSendMessage}
          >
            <div class="flex items-center">
              <input
                type="text"
                id="user-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
