import React from "react";
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from "@material-ui/core/Badge";
import { useGlobalCart } from './Context'

export default function Mycart() {
    const { amount } = useGlobalCart();
    
  return (
    <div className="menu">
      <div>&nbsp;</div>
      <IconButton>
       
    
        <Badge badgeContent={amount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
}
