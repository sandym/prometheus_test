# Setup

A server generating 2 counters for the same stats, but one is never reset to zero and one is always reset to 0.

# Counter that always grow, never reset
![image](./images/growing_value.png)
See the ever increasing value.

# Counter that reset after each scraping
![image](./images/reset_value.png)
Random at every step.

# The sum(rate()) of the counter that always grow
![image](./images/growing_value_sum_rate.png)

# The sum(rate()) of the counter that always reset
![image](./images/reset_value_sum_rate.png)

**Both sum(rate()) look the same!**
