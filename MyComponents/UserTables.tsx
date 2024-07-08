"use client";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const UserTables = () => {
  return (
    <div className="overflow-x-auto">
      <Table removeWrapper aria-label="Example static collection table" className="min-w-full">
        <TableHeader>
          <TableColumn className="whitespace-nowrap">Broker</TableColumn>
          <TableColumn className="whitespace-nowrap">No of Active position</TableColumn>
          <TableColumn className="whitespace-nowrap">Available Capital</TableColumn>
          <TableColumn className="whitespace-nowrap">Total Deployed Strategies</TableColumn>
          <TableColumn className="whitespace-nowrap">Available Strategies</TableColumn>
          <TableColumn className="whitespace-nowrap">Status</TableColumn>
          <TableColumn className="whitespace-nowrap">Current P & L</TableColumn>
          <TableColumn className="whitespace-nowrap">Required Capital</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>5</TableCell>
            <TableCell>$1,000,000</TableCell>
            <TableCell>10</TableCell>
            <TableCell>5</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>$50,000</TableCell>
            <TableCell>$200,000</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>4</TableCell>
            <TableCell>$800,000</TableCell>
            <TableCell>8</TableCell>
            <TableCell>4</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>$40,000</TableCell>
            <TableCell>$160,000</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>6</TableCell>
            <TableCell>$1,200,000</TableCell>
            <TableCell>12</TableCell>
            <TableCell>6</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>$60,000</TableCell>
            <TableCell>$240,000</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$600,000</TableCell>
            <TableCell>6</TableCell>
            <TableCell>3</TableCell>
            <TableCell>Vacation</TableCell>
            <TableCell>$30,000</TableCell>
            <TableCell>$120,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTables;
