package com.echobody.service;

import com.echobody.model.User;
import com.echobody.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User updateUserProfile(String email, User updatedUser) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            User existingUser = userOpt.get();
            existingUser.setName(updatedUser.getName());
            existingUser.setAge(updatedUser.getAge());
            existingUser.setHeight_cm(updatedUser.getHeight_cm());
            existingUser.setWeight_kg(updatedUser.getWeight_kg());
            existingUser.setGoal(updatedUser.getGoal());
            existingUser.setGender(updatedUser.getGender());
            return userRepository.save(existingUser);
        }
        return null; // Or throw exception
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
}
