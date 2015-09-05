package com.tcs.bancs.builder;

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static int getMaxMovies(int[] movie_start, int[] movie_end) {
        int output = 0;
        int bookedTill = 0;
        for (int i = 0; i < movie_start.length; i++) {
            if (movie_start[i] < movie_end[i] && bookedTill <= movie_start[i]) {
                output++;
                bookedTill = movie_end[i];
            }
        }
        return output;
    }

    public static void main(String[] args) {
       /* Scanner in = new Scanner(System.in);
        int res;

        int _movie_start_size = Integer.parseInt(in.nextLine());
        int[] _movie_start = new int[_movie_start_size];
        int _movie_start_item;
        for (int _movie_start_i = 0; _movie_start_i < _movie_start_size; _movie_start_i++) {
            _movie_start_item = Integer.parseInt(in.nextLine());
            _movie_start[_movie_start_i] = _movie_start_item;
        }


        int _movie_end_size = Integer.parseInt(in.nextLine());
        int[] _movie_end = new int[_movie_end_size];
        int _movie_end_item;
        for (int _movie_end_i = 0; _movie_end_i < _movie_end_size; _movie_end_i++) {
            _movie_end_item = Integer.parseInt(in.nextLine());
            _movie_end[_movie_end_i] = _movie_end_item;
        }*/

        int movie_start [] = {10, 12, 9, 14, 16, 14};

        int movie_end []   = {11, 13, 15, 16, 18, 18};

        int res = getMaxMovies(movie_start, movie_end);
        System.out.println(res);

    }
}
