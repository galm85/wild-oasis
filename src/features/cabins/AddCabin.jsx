import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";



function AddCabin() {
    return (
    <div>
       <Modal>
            <Modal.Open opens='cabin-form'>
                <Button>Add New Cabin</Button>
            </Modal.Open>
            <Modal.Window name="cabin-form">
                <CreateCabinForm/>
            </Modal.Window>
       </Modal>
    </div>
    )
}

export default AddCabin







// FROM MODAL V1 FILE ////////////

// function AddCabin() {
//       const [isOpenModal,setIsOpenModal] = useState(false);
    
//     return (
//         <div>
//              <Button onClick={()=>setIsOpenModal(show=>!show)}>Add new Cabin</Button>
//              {isOpenModal && 
//                 <Modal onClose={()=>setIsOpenModal(false)}>
//                     <CreateCabinForm onCloseModal={()=>setIsOpenModal(false)}/>
//                 </Modal>
//              }
//         </div>
//     )
// }

// export default AddCabin
