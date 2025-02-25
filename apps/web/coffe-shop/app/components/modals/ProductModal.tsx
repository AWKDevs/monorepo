import '@ant-design/v5-patch-for-react-19';
import React from 'react';
import { Modal, Button } from 'antd';
import Image from 'next/image';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';

interface ProductModalProps {
    isOpen: boolean;
    product: {
        name: string;
        image: string;
        price: string;
        discountedPrice: string;
        details: string;
        description: string;
    } | null;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, product, onClose }) => {
    if (!product) return null;

    return (
        <Modal
            title={product.name}
            open={isOpen}
            onCancel={onClose}
            footer={null}
            style={{
                maxWidth: '800px',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                fontFamily: 'Judson, serif',
                color: '#7C593C',
            }}
        >
            <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: '10px',
                    objectFit: 'cover',
                    marginBottom: '20px',
                }}
            />

            <p>{product.details}</p>
            <p>{product.description}</p>
            <Button
                type="primary"
                size="large"
                style={{
                    backgroundColor: '#433409',
                    color: '#fff',
                    fontFamily: 'Judson, serif',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: 'none',
                    width: '40%',
                    justifyContent: 'center',
                    marginTop: '10px',
                    borderRadius: '20px',
                }}
            >
                <PiShoppingCartSimpleFill size={20} style={{ color: '#FFE4AA' }} />
                {product.discountedPrice ||product.price}
            </Button>
        </Modal>
    );
};

export default ProductModal;