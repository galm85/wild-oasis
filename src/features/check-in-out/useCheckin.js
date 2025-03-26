import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin(){

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate:checkin, isLoading:isCheckingIn} = useMutation({
        mutationFn:(bookinkId => updateBooking(
            bookinkId,
            {status:'checked-in',isPaid:true}
        )),
        onSuccess:(data)=>{
            toast.success(`Booking #${data.id} successfully checkin`);
            queryClient.invalidateQueries({active:true});
            navigate("/");
        },
        onError:()=>{
            toast.error('There was an Error while checking in');
        }
    });

    return {checkin,isCheckingIn}

}