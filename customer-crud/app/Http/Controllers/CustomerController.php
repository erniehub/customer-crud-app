<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
{
    return Customer::all();
}

public function store(Request $request)
{
    $customer = Customer::create($request->all());
    return response()->json($customer, 201);
}

public function show($id)
{
    return Customer::find($id);
}

public function update(Request $request, $id)
{
    $customer = Customer::find($id);
    $customer->update($request->all());
    return response()->json($customer);
}

public function destroy($id)
{
    $customer = Customer::find($id);
    $customer->delete();
    return response()->json(null, 204);
}

}
