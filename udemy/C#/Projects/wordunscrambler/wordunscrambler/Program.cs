using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wordunscrambler
{
    class Program
    {
        static void Main(string[] args)
        {
           // int[] arr = { 1, 4, 6, 7, 8, 9 };
            var li = new List<int> { 1, 4, 6, 7, 8, 9 };

            foreach(var i in li)
            {
                Console.WriteLine(i);
            }

            for (int e = 0; e<li.Count;e++)
            {
                Console.WriteLine(li[e]);
            }
        }
    }
}
