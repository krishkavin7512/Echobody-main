package com.echobody.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private int age;
    private double height_cm;
    private double weight_kg;
    private String goal;
    private String gender;
}
