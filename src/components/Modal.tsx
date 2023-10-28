import React from 'react';
import BootstrapModal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { IUser } from '../constant';

type CustomModalProps = {
  isShow: boolean;
  onClose: () => void;
  user: any;
};

function CustomModal(props: CustomModalProps) {
  const { isShow, onClose, user } = props;

  return (
    <BootstrapModal show={isShow} onHide={onClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Manager</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
      <Card>
        <Card.Img variant="top" src={user?.manager?.avatar?.link} />
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{user?.manager?.firstName || 'no info'}</ListGroup.Item>
            <ListGroup.Item>{user?.manager?.lastName || 'no info'}</ListGroup.Item>
            <ListGroup.Item>{user?.manager?.phone || 'no info'}</ListGroup.Item>
            <ListGroup.Item>{user?.manager?.email || 'no info'}</ListGroup.Item>
            <ListGroup.Item>{user?.manager?.position || 'no info'}</ListGroup.Item>
        </ListGroup>
    </Card>
      </BootstrapModal.Body>
    </BootstrapModal>
  );
}

export default CustomModal;
