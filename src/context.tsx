import React, { createContext, useState, useContext } from 'react';
import { IMyContextData, IMyProviderProps, IUser, ITimeEntry } from './constant'
import users from './data/users.json'
import timesheets from './data/timesheets.json'

const MyContext = createContext<IMyContextData | undefined>(undefined);

export function MyProvider({ children }: IMyProviderProps) {
  const [data, setData] = useState<{
    users: IUser[];
    timeSheets: ITimeEntry[];
  }>({
    users: users,
    timeSheets: timesheets,
  });
  

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
}