
import {Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

function ModalsForInfo({recall, car}){
    console.log(car)


return(
<div>
    <Modal toggle={function noRefCheck(){}}>
        <ModalHeader toggle={function noRefCheck(){}}>
           {car.yearmodel} { (car.carmake).toUpperCase() } { (car.carmodel).toUpperCase() }
        </ModalHeader>
        
        <ModalBody>
           {recall.Component}

           {recall.Summary} 

           {recall.Remedy}
        </ModalBody>

        <ModalFooter>
            <Button onClick={function noRefCheck(){}}>
                Close
            </Button>
        </ModalFooter>
    </Modal>
</div>
)}

export default ModalsForInfo;