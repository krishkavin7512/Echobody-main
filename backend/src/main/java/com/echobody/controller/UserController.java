package com.echobody.controller;

import com.echobody.model.User;
import com.echobody.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public User getProfile(Authentication authentication) {
        return userService.getUserByEmail(authentication.getName());
    }

    @PutMapping("/profile")
    public User updateProfile(@RequestBody User user, Authentication authentication) {
        // authentication.getName() returns email because of CustomUserDetailsService
        // loadUserByUsername
        return userService.updateUserProfile(authentication.getName(), user);
    }
}
