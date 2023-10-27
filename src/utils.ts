/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ITimeEntry, IUser } from './constant';

export const convertStartTimeToMonth = (startTime: string) => {
    const date = new Date(startTime);
    const month = date.getMonth();
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month]; 
};

export const findData = (array: (any)[], userId: string, type: boolean): (IUser | ITimeEntry)[] => {
    return array.filter(item => {
      if (item.userId === userId) {
        if (type) {
          item.month = convertStartTimeToMonth(item?.startTime);
        }
        return item;
      }
    });
  };
  