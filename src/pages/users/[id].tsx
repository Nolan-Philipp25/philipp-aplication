import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useMyContext } from '../../context';
import { ITimeEntry, IUser } from '../../constant';
import { findData } from '../../utils'
import TimeSheetsTable from '../../components/TimeSheetsTable';
import Select from '../../components/Select';

function TimeSheets() {
  const { id } = useParams<{ id?: string }>();
  const { data } = useMyContext();
  const [options, setOptions] = useState<never[]>([]);
  const [timeSheetResult, setTimeSheetResult] = useState<ITimeEntry[]>([]);
  const [timeSheetFiltered, setTimeSheetFiltered] = useState<ITimeEntry[]>([]);  

  const timeSheets: ITimeEntry[] = data.timeSheets;
  const users: IUser[] = data.users;
  const uniqueMonths = new Set<string>();

  const filterHandler = ({ target }: any) => {
    if (target?.value !== "") {
      const filteredTimeSheets = timeSheetResult?.filter((item) => item.month === target?.value);
      setTimeSheetFiltered(filteredTimeSheets)
    }else{
      setTimeSheetFiltered(timeSheetResult)
    }
  }

  useEffect(() => {
    const filteredTimeSheets:any = findData(timeSheets, id || '', true);
    setTimeSheetResult(filteredTimeSheets);
    setTimeSheetFiltered(filteredTimeSheets);
    filteredTimeSheets.forEach((item: { month: string; }) => {
      if (item?.month) {
        uniqueMonths.add(item.month);
      }
    });
    const uniqueMonthsArray = Array.from(uniqueMonths) as never[];
    setOptions(uniqueMonthsArray);
  }, [timeSheets, id]);


  return (
    <div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <h6 style={{padding: '1rem', whiteSpace: 'nowrap'}}>Select month: </h6>
        <Select options={options} filterHanler={filterHandler}/>
      </div>
      <TimeSheetsTable timeSheet={timeSheetFiltered} user={users.filter(item => item.id === id)?.[0]}/>
    </div>
)
}
export default TimeSheets;