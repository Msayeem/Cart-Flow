"use client"
import { Button, Select, FieldError, Input, Label, ListBox, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


interface AllProductsProps {
  product: {
    _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: string;
    description:string;
    warrenty: string;
  };
}

const EditProducts = ({product}: AllProductsProps) => {

  const router=useRouter();


const onSubmit=async(e: React.SubmitEvent<HTMLFormElement>)=>{
e.preventDefault();
const formData=new FormData(e.currentTarget);
const updated=Object.fromEntries(formData.entries());

const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${product._id}`,{
  method:'PATCH',
  headers:{
     'content-type':'application/json',
  },
  body:JSON.stringify(updated)
});

const result=await res.json();
toast.success(`${product.productName} Edited Successfully!`)
router.push('/manage');

}

    return (
      <div>
            <h1 className="text-3xl font-extrabold tracking-tight ml-10 mt-10 text-slate-900 sm:text-4xl">
              Edit <span className="text-orange-600">Product</span>
            </h1>
      
            <form onSubmit={onSubmit} className="p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Destination Name */}
                <div >
                  <TextField defaultValue={product.productName} name="productName" isRequired>
                    <Label>Product Name</Label>
                    <Input placeholder="e.g. Watch" className="rounded-2xl" />
                    <FieldError />
                  </TextField>
                </div>
      
          
      
                {/* Category - Select Component */}
                <div>
                  <Select defaultValue={product.productType} name="productType" isRequired className="w-full" placeholder="Select Type">
                    <Label>Product Type</Label>
                    <Select.Trigger className="rounded-2xl">
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="Tech & Electronics" textValue="Tech & Electronics">
                          Tech & Electronics
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Fabrics & Apparel" textValue="Fabrics & Apparel">
                          Fabrics & Apparel
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Digital Tools" textValue="Digital Tools">
                          Digital Tools
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
      
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>
      
                {/* Price */}
                <TextField defaultValue={product?.price} name="price" type="number" isRequired>
                  <Label>Price (USD)</Label>
                  <Input type="number" placeholder="e.g. 45" className="rounded-2xl" />
                  <FieldError />
                </TextField>
      
                {/* Capacity */}
                <TextField defaultValue={product.warrenty} name="warrenty" type="number" isRequired>
                  <Label>Warrenty (Years)</Label>
                  <Input type="number" placeholder="e.g. 2" className="rounded-2xl" />
                  <FieldError />
                </TextField>
      
      
      
             
      
                {/* Image URL */}
                <div className="md:col-span-2">
                  <TextField defaultValue={product.imageUrl} name="imageUrl" isRequired>
                    <Label>Image URL</Label>
                    <Input type="url" placeholder="https://example.com/cricket-field.jpg" className="rounded-2xl" />
                    <FieldError />
                  </TextField>
                </div>
      
              
      
                {/* Description */}
                <div className="md:col-span-2">
                  <TextField defaultValue={product.description} name="description" isRequired>
                    <Label>Description</Label>
                    <TextArea placeholder="Describe your product.." className="rounded-3xl" />
                    <FieldError />
                  </TextField>
                </div>
              </div>
      
              {/* Submit */}
              <Button
                type="submit"
                variant="outline"
                className="w-full bg-orange-600 text-white text-[17px] rounded-[10px] font-semibold py-7"
              >
                Edit Product
              </Button>
            </form>
          </div>
    );
};

export default EditProducts;