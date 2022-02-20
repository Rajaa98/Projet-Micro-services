package org.sid.customerservice.web;

import org.sid.customerservice.entites.Customer;
import org.sid.customerservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.function.StreamBridge;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import java.util.Date;
import java.util.List;
import java.util.Random;

@RestController
public class CustomerEventRestController {
    @Autowired
    private StreamBridge streamBridge;
    @Autowired
    private CustomerRepository customerRepository;
    @GetMapping("/customers")
        //public Customer customer(@PathVariable String topic ,@PathVariable String id){
        //Customer customer= new Customer();
        //streamBridge.send(topic,customer);
        //return customer;
        public List<Customer> getAllCustomers(){
            return customerRepository.findAll();

        }
      @GetMapping("/customers/{topic}/{id}")
        public Customer updateCustomer(@PathVariable("id") Long customerId, @RequestBody Customer newCustomer){
            newCustomer.setId(customerId);
            return customerRepository.save(newCustomer);
      }

}
