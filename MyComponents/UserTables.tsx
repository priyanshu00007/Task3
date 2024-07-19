"use client";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const UserTables = () => {
  return (
    <div className="overflow-x-auto p-5">
      <Table removeWrapper aria-label="Example static collection table" className="min-w-full bg-red1 shadow rounded-lg overflow-hidden">
        <TableHeader className="border-b-2 border-gray-300 bg-gray-50">
          <TableColumn className="whitespace-nowrap">Broker</TableColumn>
          <TableColumn className="whitespace-nowrap">No of active positions</TableColumn>
          <TableColumn className="whitespace-nowrap">Available Capital</TableColumn>
          <TableColumn className="whitespace-nowrap">Total Deployed Strategies</TableColumn>
          <TableColumn className="whitespace-nowrap">Active Strategies</TableColumn>
          <TableColumn className="whitespace-nowrap">Status</TableColumn>
          <TableColumn className="whitespace-nowrap">Current P & L</TableColumn>
          <TableColumn className="whitespace-nowrap">Required Capital</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Zerodha (DU000004)</TableCell>
            <TableCell>1</TableCell>
            <TableCell>₹ 1.54 Cr</TableCell>
            <TableCell>3</TableCell>
            <TableCell>1</TableCell>
            <TableCell className="text-green-600">Active</TableCell>
            <TableCell>₹ 50.02 K</TableCell>
            <TableCell>₹ 50.02 K</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Angel One (MNBN1026)</TableCell>
            <TableCell>2</TableCell>
            <TableCell>₹ 2.50 K</TableCell>
            <TableCell>2</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-green-600">Active</TableCell>
            <TableCell>₹ 60.02 K</TableCell>
            <TableCell>₹ 60.02 K</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Finvasia (FA189009)</TableCell>
            <TableCell>0</TableCell>
            <TableCell>₹ 50.02 K</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell className="text-yellow-600">Pending</TableCell>
            <TableCell>₹ 0.00</TableCell>
            <TableCell>₹ 0.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTables;
