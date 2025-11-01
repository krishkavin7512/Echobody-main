package com.echobody.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String email;
    private String password;
    private String name;
    private int age;
    private double height_cm;
    private double weight_kg;
    private String goal;
    private String gender;
}
