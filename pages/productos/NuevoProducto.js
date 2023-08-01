import Layout from "@/components/Layout";
import { useState } from "react";
import axios from 'axios';
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import FormProducto from "@/components/FormProducto";

function NuevoProducto() {

  return (
    <Layout>
      <FormProducto>
        
      </FormProducto>
    </Layout>
  );
}

export default NuevoProducto;
