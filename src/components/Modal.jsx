import { Button, Modal } from 'react-bootstrap'

export function MyModal(props) {
  console.log(props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.cart.shopName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          props.cart.count <= 0 && props.cart.count2 <= 0 ?
            <p>No item</p>
            :
            <>
              {props.cart.count <= 0 ? '' : <p>{props.cart.menu1}  {props.cart.count}</p>}
              {props.cart.count2 <= 0 ? '' : <p>{props.cart.menu2}  {props.cart.count2}</p>}
            </>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant='danger'>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

