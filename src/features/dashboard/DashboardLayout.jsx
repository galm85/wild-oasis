import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from '../cabins/useCabins';
import styled from "styled-components";
import Spinner from '../../ui/Spinner';
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {

  const {isLoading:isLoading1,bookings} = useRecentBookings();
  const {isLoading:isLoading2,stays,confirmedStays,numDays} = useRecentStays();
  const {isLoading:isLoading3,cabins} = useCabins();

  if(isLoading1 || isLoading2 || isLoading3) return <Spinner/>

  
  return (
   <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCounts={cabins.length}/>
      <div>statistics</div>
      <div>activiti today</div>
      <div>chart sty</div>
   </StyledDashboardLayout>
  )
}

export default DashboardLayout

