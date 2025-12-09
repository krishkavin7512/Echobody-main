package com.echobody.dto;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class PersonalRecordDTO {
    private String id;
    private String name;
    private String date;
    private double value;
    private String unit;
}
