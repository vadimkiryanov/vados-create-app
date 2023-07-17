import { QueryClient, QueryClientProvider, useMutation, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import React from 'react';

function App() {
  return (
    <div className="w-screen h-screen grid place-items-center content-center">
      <div className="container grid place-items-center content-center">
        <div className="grid place-items-center content-center">
          <p className="text-7xl animate-bounce">🤡</p>
          <p className="text-7xl font-bold">Vados CRA</p>
        </div>

        <div className="max-w-md text-center mt-10 bg-base-200 px-4 py-6 rounded-xl">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">My name is Vados Jenkins and this is my minimal tech stack that I use in 99% of my projects. Happy to share.</p>
          <a href='https://github.com/vadimkiryanov/vados-create-app' target='_blank' rel='noreferrer' className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default App;
