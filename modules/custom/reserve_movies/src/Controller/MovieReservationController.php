<?php
namespace Drupal\reserve_movies\Controller;
use \Drupal\node\Entity\Node;

class MovieReservationController {
    public function showMovies() {
       $query = \Drupal::entityQuery('node')
          ->condition('type', 'movie')
          ->sort('created','DESC')
          ->execute();
        $movies = Node::loadMultiple($query);

        return array(
             '#theme' => 'movie-list',
             '#movies' => $movies,
             '#title' => 'List of movies'
         );
    }
}
